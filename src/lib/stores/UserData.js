import { writable } from "svelte/store";
export let habitName = '';

export const habits = writable([]);
