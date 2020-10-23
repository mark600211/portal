import { Entity, JoinColumn } from 'typeorm';
import { BaseEvent } from '../../base-event.model';
import { NormativeDocument } from './normative-document.model';

@Entity()
export class NDEvent extends BaseEvent {
  @JoinColumn({ name: 'payload' })
  normativeDocuemtns: NormativeDocument;
}
