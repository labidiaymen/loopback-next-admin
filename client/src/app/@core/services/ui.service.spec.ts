import { TestBed } from '@angular/core/testing';

import { UiService } from './ui.service';
import { AppModule } from 'src/app/app.module';

describe('UiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      AppModule
    ],
    providers: [UiService]
  }));

  it('should be created', () => {
    const service: UiService = TestBed.get(UiService);
    expect(service).toBeDefined();
  });
});
