import { CreateEventDto } from 'src/core/services/event/dtos';
import { IsInt, IsOptional, MaxLength, MinLength, IsDate} from 'class-validator';

export class CreateEventReqApiDto implements CreateEventDto {
  @IsOptional()
  @IsInt()
  user_id: number;

  @IsInt()
  category_id: number;

  @MinLength(1)
  @MaxLength(256)
  name: string;

  @IsOptional()
  @MaxLength(4096)
  description?: string;

  @IsOptional()
  @IsInt()
  ticket_count: number;

  @IsOptional()
  @IsInt()
  ticket_price: number;

  @IsOptional()
  @IsInt()
  lat: number;

  @IsOptional()
  @IsInt()
  lng: number;

  @IsOptional()
  @IsDate()
  created_at: Date;

  @IsOptional()
  @IsDate()
  deleted_at: Date;

  @IsOptional()
  @IsDate()
  date: Date;
}