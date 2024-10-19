interface Summary {
  totalCases: number;
  activeCases: number;
  recovered: number;
  deaths: number;
}

interface IDatewiseCases {
  date: string;
  activeCases: number;
  recovered: number;
  deaths: number;
  totalCases: number;
}

export interface Regional {
  location: string;
  totalCases: number;
  activeCases: number;
  recovered: number;
  deaths: number;
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
