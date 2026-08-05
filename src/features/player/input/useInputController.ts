"use client";

import { useEffect, useState } from "react";
import { InputController } from "@/features/player/input/InputController";

export function useInputController(): InputController {
  const [inputController] = useState(() => new InputController());

  useEffect(() => {
    inputController.attach(window);

    return () => inputController.detach(window);
  }, [inputController]);

  return inputController;
}
