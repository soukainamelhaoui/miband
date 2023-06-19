import { TestBed } from '@angular/core/testing';

import { ClientBoardServiceService } from './client-board-service.service';

describe('ClientBoardServiceService', () => {
  let service: ClientBoardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientBoardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
