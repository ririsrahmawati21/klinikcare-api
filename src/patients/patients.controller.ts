import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('api/v1/patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  findAll() {
    return {
      statusCode: HttpStatus.OK,
      message: 'Berhasil mengambil seluruh data pasien',
      data: this.patientsService.findAll(),
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Detail pasien ditemukan',
      data: this.patientsService.findOne(id),
    };
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createPatientDto: CreatePatientDto) {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Pasien berhasil didaftarkan',
      data: this.patientsService.create(createPatientDto),
    };
  }

  @Put(':id')
  updateFull(@Param('id') id: string, @Body() updatePatientDto: CreatePatientDto) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Seluruh data pasien berhasil diperbarui',
      data: this.patientsService.update(id, updatePatientDto),
    };
  }

  @Patch(':id')
  updatePartial(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Data pasien berhasil diperbarui',
      data: this.patientsService.update(id, updatePatientDto),
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    this.patientsService.remove(id);
  }
}