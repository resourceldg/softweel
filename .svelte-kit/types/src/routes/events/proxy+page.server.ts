// @ts-nocheck
import { getLatest, getUpcoming } from '$data/utils/time';
import type { PageServerLoad } from './$types';
import { events } from '$data/events';

export const load = () => {
	const upcomingEvents = getUpcoming(events);
	const latestEvents = getLatest(events);

	return {
		latestEvents,
		upcomingEvents
	};
};
;null as any as PageServerLoad;