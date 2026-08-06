import { defaultKeyboardBindings } from "@/features/player/input/bindings";
import type {
  InputAction,
  InputSnapshot,
  LookInput,
  MovementInput,
} from "@/features/player/input/types";

const EMPTY_LOOK: LookInput = { x: 0, y: 0 };

export class InputController {
  private activeActions = new Set<InputAction>();
  private look: LookInput = { ...EMPTY_LOOK };
  private jumpRequested = false;
  private interactRequested = false;
  private attached = false;

  attach(target: Window): void {
    if (this.attached) return;

    target.addEventListener("keydown", this.onKeyDown);
    target.addEventListener("keyup", this.onKeyUp);
    target.addEventListener("mousemove", this.onMouseMove);
    target.addEventListener("blur", this.clear);
    this.attached = true;
  }

  detach(target: Window): void {
    if (!this.attached) return;

    target.removeEventListener("keydown", this.onKeyDown);
    target.removeEventListener("keyup", this.onKeyUp);
    target.removeEventListener("mousemove", this.onMouseMove);
    target.removeEventListener("blur", this.clear);
    this.clear();
    this.attached = false;
  }

  snapshot(): InputSnapshot {
    const snapshot = {
      look: this.consumeLook(),
      movement: this.getMovement(),
      jumpRequested: this.consumeJump(),
      interactRequested: this.consumeInteraction(),
    };

    return snapshot;
  }

  private getMovement(): MovementInput {
    const forward =
      Number(this.activeActions.has("moveForward")) -
      Number(this.activeActions.has("moveBackward"));
    const right =
      Number(this.activeActions.has("moveRight")) - Number(this.activeActions.has("moveLeft"));

    return {
      forward,
      right,
      fastStep: this.activeActions.has("fastStep"),
    };
  }

  private consumeLook(): LookInput {
    const look = { ...this.look };
    this.look = { ...EMPTY_LOOK };
    return look;
  }

  private consumeJump(): boolean {
    const requested = this.jumpRequested;
    this.jumpRequested = false;
    return requested;
  }

  private consumeInteraction(): boolean {
    const requested = this.interactRequested;
    this.interactRequested = false;
    return requested;
  }

  private onKeyDown = (event: KeyboardEvent): void => {
    const action = defaultKeyboardBindings[event.code];
    if (action === "jump" && !event.repeat) this.jumpRequested = true;
    if (action === "interact" && !event.repeat) this.interactRequested = true;
    if (action) this.activeActions.add(action);
  };

  private onKeyUp = (event: KeyboardEvent): void => {
    const action = defaultKeyboardBindings[event.code];
    if (action) this.activeActions.delete(action);
  };

  private onMouseMove = (event: MouseEvent): void => {
    if (document.pointerLockElement === null) return;

    this.look.x += event.movementX;
    this.look.y += event.movementY;
  };

  private clear = (): void => {
    this.activeActions.clear();
    this.look = { ...EMPTY_LOOK };
    this.jumpRequested = false;
    this.interactRequested = false;
  };
}
