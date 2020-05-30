import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { IUser } from '@app/store/user/user.interface';

@Injectable({ providedIn: 'root' })
export class UserBackendService {
	protected readonly url = `${environment.backendUrl}/users`;

	constructor(protected readonly http: HttpClient) {}

	getAll(): Observable<IUser[]> {
		return this.http.get<IUser[]>(this.url);
	}

	update(user: Update<IUser>): Observable<Update<IUser>> {
		return this.http.patch<Update<IUser>>(`${this.url}/${user.id}`, {
			...user.changes,
			id: user.id,
		});
	}
}
