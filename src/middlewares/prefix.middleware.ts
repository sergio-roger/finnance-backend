import { Router } from 'express';

export function prefixRoute(prefix: string, router: Router): Router {
	const wrapper = Router();

	wrapper.use(prefix, router);

	return wrapper;
}
