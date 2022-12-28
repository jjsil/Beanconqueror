import { PeripheralData } from './ble.types';
import { BluetoothScale } from './bluetoothDevice';
import { DecentScale } from './decentScale';
import { FelicitaScale } from './felicitaScale';
import { JimmyScale } from './jimmyScale';
import { LunarScale } from './lunarScale';
import { PressureDevice } from './pressureBluetoothDevice';
import { PopsiclePressure } from './popsiclePressure';
import { TransducerDirectPressure } from './transducerDirectPressure';
import { EurekaPrecisaScale } from './eurekaPrecisaScale';
import { PrsPressure } from './prsPressure';
export { BluetoothScale, SCALE_TIMER_COMMAND } from './bluetoothDevice';

export enum ScaleType {
  DECENT = 'DECENT',
  LUNAR = 'LUNAR',
  JIMMY = 'JIMMY',
  FELICITA = 'FELICITA',
  EUREKAPRECISA = 'EUREKAPRECISA',
}

export enum PressureType {
  POPSICLE = 'POPSICLE',
  DIRECT = 'DIRECT',
  PRS = 'PRS',
}

export function makeDevice(
  type: ScaleType,
  data: PeripheralData
): BluetoothScale | null {
  switch (type) {
    case ScaleType.DECENT:
      return new DecentScale(data);
    case ScaleType.LUNAR:
      return new LunarScale(data);
    case ScaleType.JIMMY:
      return new JimmyScale(data);
    case ScaleType.FELICITA:
      return new FelicitaScale(data);
    case ScaleType.EUREKAPRECISA:
      return new EurekaPrecisaScale(data);
    default:
      return null;
  }
}

export function makePressureDevice(
  type: PressureType,
  data: PeripheralData
): PressureDevice | null {
  switch (type) {
    case PressureType.POPSICLE:
      return new PopsiclePressure(data);
    case PressureType.DIRECT:
      return new TransducerDirectPressure(data);
    case PressureType.PRS:
      return new PrsPressure(data);
    default:
      return null;
  }
}