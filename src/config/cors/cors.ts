import cors from 'cors';

const corsOptions: cors.CorsOptions = {
	origin: '*',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	credentials: true,
};

export default cors(corsOptions);
