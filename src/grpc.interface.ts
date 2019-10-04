import { Observable } from 'rxjs';

export interface IGrpcService {
  login(user: User): Observable<any>;
}

interface User {
  email: string;
  password: string;
}
