import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ExternalConfigurationHandlerInterface } from "angular4-hal";

@Injectable()
export class ExternalConfigurationService
  implements ExternalConfigurationHandlerInterface {

  constructor(private http: HttpClient) { }

  getProxyUri(): string {
    return environment.backendUrl;
  }

  getRootUri(): string {
    return environment.backendUrl;
  }

  getHttp(): HttpClient {
    return this.http;
  }

  getUri(): string {
    return this.getRootUri();
  }

  getExternalConfiguration(): any {
    return null;
  }

  setExternalConfiguration(externalConfiguration: any) { }

  deserialize() { }
  serialize() { }
}
