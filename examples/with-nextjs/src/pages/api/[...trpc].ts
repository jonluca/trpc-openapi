import { createOpenApiNextHandler } from '@lilyrose2798/trpc-openapi';
import { NextApiRequest, NextApiResponse } from 'next';
import cors from 'nextjs-cors';

import { appRouter, createContext } from '../../server/router';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Setup CORS
  await cors(req, res);

  // Handle incoming OpenAPI requests
  return createOpenApiNextHandler({
    router: appRouter,
    createContext,
  })(req, res);
};

export default handler;
