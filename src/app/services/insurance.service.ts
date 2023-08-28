import { Injectable } from '@angular/core';
import {Insurance} from "../models/insurance.model";
import {GenerateCrudService} from "./generate-crud.service";
import {ConfigService} from "./config.service";

const collection = 'insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService extends GenerateCrudService<Insurance> {

  // Constructor
  constructor(protected override configService: ConfigService) {
    super(configService, collection);
  }
}
