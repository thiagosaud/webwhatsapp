import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Update } from '@ngrx/entity';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { IChat } from '@store/chat/chat.interface';

@Injectable({ providedIn: 'root' })
export class ChatBackendService {
	protected readonly url = `${environment.backendUrl}/chat`;

	constructor(protected readonly http: HttpClient) {}

	get(): Observable<IChat[]> {
		return this.http.get<IChat[]>(this.url);
	}

	update(chat: Update<IChat>): Observable<Update<IChat>> {
		return this.http.patch<Update<IChat>>(`${this.url}/${chat.id}`, {
			...chat.changes,
			id: chat.id,
		});
	}
}
