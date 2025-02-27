// This code rightfully belongs to https://svelte.dev/repl/2254c3b9b9ba4eeda05d81d2816f6276?version=3.32.2

/* eslint-disable @typescript-eslint/no-unused-vars */
import { writable, derived } from 'svelte/store';

function createNotificationStore(timeout) {
	const _notifications = writable([]);

	function send(message, type = 'default', timeout) {
		_notifications.update((state) => {
			return [...state, { id: id(), type, message, timeout }];
		});
	}

	const notifications = derived(_notifications, ($_notifications, set) => {
		set($_notifications);
		if ($_notifications.length > 0) {
			const timer = setTimeout(() => {
				_notifications.update((state) => {
					state.shift();
					return state;
				});
			}, $_notifications[0].timeout);
			return () => {
				clearTimeout(timer);
			};
		}
	});
	const { subscribe } = notifications;

	return {
		subscribe,
		send,
		default: (msg, timeout) => send(msg, 'default', timeout),
		danger: (msg, timeout) => send(msg, 'danger', timeout),
		warning: (msg, timeout) => send(msg, 'warning', timeout),
		info: (msg, timeout) => send(msg, 'info', timeout),
		success: (msg, timeout) => send(msg, 'success', timeout)
	};
}

function id() {
	return '_' + Math.random().toString(36).substr(2, 9);
}

export const notifications = createNotificationStore(null);
