import { DebugElement } from '@angular/core';

/** Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler */
export const ButtonClickEvents = {
    left: { button: 0 },
    right: { button: 2 },
};

/** Simulate element click. Defaults to mouse left-button click event. */
export function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
    if (el instanceof HTMLElement) {
        el.click();
    } else {
        el.triggerEventHandler('click', eventObj);
    }
}

export function focus(el: DebugElement | HTMLElement): void {
    if (el instanceof HTMLElement) {
        el.focus();
    } else {
        el.triggerEventHandler('focus', null);
    }
}

export function blur(el: DebugElement | HTMLElement): void {
    if (el instanceof HTMLElement) {
        el.blur();
    } else {
        el.triggerEventHandler('blur', null);
    }
}
