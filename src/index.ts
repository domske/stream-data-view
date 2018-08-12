import { StreamDataView } from './stream';

if (window) {
  (window as any).StreamDataView = StreamDataView;
}

export { StreamDataView };
