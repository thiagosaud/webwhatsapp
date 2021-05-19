import IEnvironment from './environment.interface';

export const environment: IEnvironment = {
	production: true,
	backendUrl: `${window.location.href}api`,
};
