import { HttpErrorResponse } from '@angular/common/http';

export const  prepareResponseErrorMessage = (error: HttpErrorResponse) => {
  if (error.error && error.error.message) {
    return error.error.message;
  } else if (error.status === 401) {
    return 'Unauthorized';
  } else {
    return 'Something went wrong';
  }
};
