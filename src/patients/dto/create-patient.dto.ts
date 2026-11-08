import { IsNotEmpty, IsString, IsEnum, IsDateString, Length } from 'class-validator';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export class CreatePatientDto {
  @IsNotEmpty({ message: 'NIK tidak boleh kosong' })
  @IsString({ message: 'NIK harus berupa string' })
  @Length(16, 16, { message: 'NIK harus berisi tepat 16 digit angka' })
  nik: string;

  @IsNotEmpty({ message: 'Nama lengkap tidak boleh kosong' })
  @IsString({ message: 'Nama lengkap harus berupa teks' })
  fullName: string;

  @IsNotEmpty({ message: 'Jenis kelamin tidak boleh kosong' })
  @IsEnum(Gender, { message: 'Jenis kelamin harus MALE atau FEMALE' })
  gender: Gender;

  @IsNotEmpty({ message: 'Tanggal lahir tidak boleh kosong' })
  @IsDateString({}, { message: 'Tanggal lahir harus berformat YYYY-MM-DD' })
  dateOfBirth: string;

  @IsNotEmpty({ message: 'Nomor telepon tidak boleh kosong' })
  @IsString()
  phone: string;

  @IsNotEmpty({ message: 'Alamat tidak boleh kosong' })
  @IsString()
  address: string;
}