interface Summary {
  total: number;
  confirmedCasesIndian: number;
  confirmedCasesForeign: number;
  discharged: number;
  deaths: number;
  confirmedButLocationUnidentified: number;
}

interface IDatewiseCases {
  date: Date;
  confirmedCasesIndian: number;
  confirmedCasesForeign: number;
  discharged: number;
  deaths: number;
}

export interface Regional {
  loc: string;
  confirmedCasesIndian: number;
  confirmedCasesForeign: number;
  discharged: number;
  deaths: number;
  totalConfirmed: number;
  coordinates: { lat: number; lng: number };
  datewiseCases: IDatewiseCases[];
}

interface CovidData {
  summary: Summary;
  regional: Regional[];
}

export interface ICovidApiResponse {
  success: boolean;
  data: CovidData;
  lastRefreshed: string;
  lastOriginUpdate: string;
}
