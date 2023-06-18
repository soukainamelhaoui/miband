import { TestBed } from '@angular/core/testing';

import { ClientBoardService } from './client-board.service';

describe('ClientBoardService', () => {
  let service: ClientBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
