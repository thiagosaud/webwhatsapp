import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'environments/environment';

// CUSTOM MODULES
import { AppRoutingModule } from './app-routing.module';
import { ComponentModule } from '@components/component.module';

// STORE
import * as Store from '@store/store';

// COMPONENTS
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		ComponentModule,
		EffectsModule.forRoot(Store.EFFECTS),
		StoreModule.forRoot(Store.REDUCERS),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !environment.production }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
