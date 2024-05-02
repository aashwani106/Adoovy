import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerWebsitesComponent } from './seller-websites.component';

describe('SellerWebsitesComponent', () => {
  let component: SellerWebsitesComponent;
  let fixture: ComponentFixture<SellerWebsitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerWebsitesComponent]
    });
    fixture = TestBed.createComponent(SellerWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
