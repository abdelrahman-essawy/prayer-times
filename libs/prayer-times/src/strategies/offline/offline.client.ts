import {
  AdhanPackageStrategy,
  OfflineCalculationMethod,
} from './adhan/adhan-package.strategy';
import { CalculationMethod, PrayerTimes } from 'adhan';

interface OfflineClientProps {
  param: OfflineCalculationMethod;
}
export class OfflineClient {
  private readonly params: ConstructorParameters<typeof PrayerTimes>[2];
  constructor(private readonly props: OfflineClientProps) {
    this.params = CalculationMethod[props.param ?? 'Egyptian']();
  }
  getTimings({
    date,
    coordinates,
  }: {
    coordinates: ConstructorParameters<typeof PrayerTimes>[0];
    date: ConstructorParameters<typeof PrayerTimes>[1];
  }) {
    return new AdhanPackageStrategy(
      coordinates,
      date,
      this.params
    ).getTimings();
  }
}
