import { expect, test } from "@playwright/test";

test("starts the temporary experience and exposes calibration", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading")).toBeVisible();
  await expect(page.getByRole("button", { name: /Iniciar/ })).toBeVisible();
  await expect(page.locator("canvas")).toBeVisible();

  await page.getByRole("button", { name: /Iniciar/ }).click();
  await page.keyboard.press("F3");
  await expect(page.getByRole("button", { name: /Controles temporários/ })).toBeVisible();
  await page.evaluate(() => document.exitPointerLock());
  await expect(page.getByRole("button", { name: /Retomar experiência/ })).toBeVisible();
  await page.getByRole("button", { name: /Controles temporários/ }).click();
  await expect(page.getByRole("heading", { name: /Controles temporários/ })).toBeVisible();

  await page.getByRole("button", { name: "Legacy" }).click();
  await expect(page.getByText("Modelo: legacy")).toBeVisible();
  await page.getByRole("button", { name: "Projetos" }).click();
  await expect(page.getByText("Cena: projects")).toBeVisible();
  await page.getByRole("button", { name: "Hub" }).click();
  await expect(page.getByText("Cena: hub")).toBeVisible();
  const speed = page.getByTestId("calibration-walkSpeed");
  await speed.fill("6");
  await expect(speed).toHaveValue("6");
  await page.getByRole("button", { name: /Restaurar valores propostos/ }).click();
  await expect(speed).toHaveValue("4");
});

test("travels through the diegetic thresholds without the development panel", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Iniciar/ }).click();
  await page.locator("canvas").click();

  await page.keyboard.down("KeyW");
  await expect(page.getByRole("button", { name: /Atravessar para Projetos/ })).toBeVisible({
    timeout: 12000,
  });
  await page.keyboard.up("KeyW");
  await page.keyboard.press("KeyE");
  await expect(page.getByTestId("experience-canvas")).toHaveAttribute("data-scene-id", "projects");

  await page.keyboard.down("KeyW");
  await expect(page.getByRole("button", { name: /Retornar ao Limiar/ })).toBeVisible({
    timeout: 12000,
  });
  await page.keyboard.up("KeyW");
  await page.keyboard.press("KeyE");
  await expect(page.getByTestId("experience-canvas")).toHaveAttribute("data-scene-id", "hub");
});
