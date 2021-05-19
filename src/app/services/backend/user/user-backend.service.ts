import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { IUser } from '@app/store/user/user.interface';

@Injectable({ providedIn: 'root' })
export class UserBackendService {
	protected readonly url = `${environment.backendUrl}/users`;
	protected readonly databaseOriginal = [
		{
			id: '0f1f30df-aa71-4c49-bb5f-aa71c689a432',
			full_name: 'THIAGO DE BONIS',
			avatar: 'assets/images/users/thiago.jpg',
			isMain: true,
			isClicked: false,
		},
		{
			id: 'cd7a7081-8d00-4156-98fb-ae0410532b37',
			full_name: 'BILL GATES',
			avatar: 'assets/images/users/bill.jpg',
			isMain: false,
			isClicked: false,
		},
		{
			id: 'aba7beca-0ffa-4057-8e45-fb65ea11d4a0',
			full_name: 'MARGARET HAMILTON',
			avatar: 'assets/images/users/margaret.jpg',
			isMain: false,
			isClicked: false,
		},
		{
			id: '75d5a93f-25a3-44b8-a00c-9ec540e7269d',
			full_name: 'STEVE JOBS',
			avatar: 'assets/images/users/steve.jpg',
			isMain: false,
			isClicked: false,
		},
		{
			id: 'd4918415-f2db-438a-9ecd-61cd504d626c',
			full_name: 'NIKOLA TESLA',
			avatar: 'assets/images/users/tesla.jpg',
			isMain: false,
			isClicked: true,
		},
		{
			id: 'd564173f-bd44-41c5-95a9-4c0f3088271b',
			full_name: 'LINUS TORVALDS',
			avatar: 'assets/images/users/linus.jpg',
			isMain: false,
			isClicked: false,
		},
		{
			id: '85afbbab-d675-49b0-bbfe-c7903018c65b',
			full_name: 'EDSGER DIJKSTRA',
			avatar: 'assets/images/users/dijkstra.jpg',
			isMain: false,
			isClicked: false,
		},
		{
			id: '758474b4-0ac4-46be-81a4-bf7f14a6b740',
			full_name: 'WARREN BUFFETT',
			avatar: 'assets/images/users/warren.jpg',
			isMain: false,
			isClicked: false,
		},
		{
			id: 'be1044ec-4e0b-4bab-86ac-87ca7dce7bc2',
			full_name: 'JACK MA',
			avatar: 'assets/images/users/jack.jpg',
			isMain: false,
			isClicked: false,
		},
		{
			id: 'cbfe2ee3-6a4d-4c00-9206-f59694e31c30',
			full_name: 'MARK ZUCKERBERG',
			avatar: 'assets/images/users/mark.jpg',
			isMain: false,
			isClicked: false,
		},
	];

	constructor(protected readonly http: HttpClient) {}

	restoreAll(): Observable<Update<IUser>> {
		return this.http.put<Update<IUser>>(this.url, this.databaseOriginal);
	}

	getAll(): Observable<IUser[]> {
		return this.http.get<IUser[]>(this.url);
	}

	update(user: Update<IUser>): Observable<Update<IUser>> {
		return this.http.patch<Update<IUser>>(
			this.url,
			{
				...user.changes,
				id: user.id,
			},
			{
				params: {
					id: user.id.toString(),
				},
			}
		);
	}
}
