import { AuthGuard } from './auth.guard';

export const authProviders = [
  {
    provide: 'APP_GUARD',
    useClass: AuthGuard,
  },
];
