import { writable } from 'svelte/store';

export const historyStack = writable([]);
export const isBack = writable(false);
export const cur_page = writable("");
export const isSkip_page = writable(false);
export const isFirst_page = writable(true);
export const HomePath = writable("/home");
export const ConfirmMsg = writable("");