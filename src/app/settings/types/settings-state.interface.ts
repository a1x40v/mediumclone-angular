import { BackendErrorsInterface } from '../../shared/types/backend-errors.interface';

export interface SettingsStateInterface {
  isSumbitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
