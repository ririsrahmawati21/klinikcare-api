import { Injectable, NotFoundException } from '@nestjs/common';
import { Patient } from './entities/patient.entity';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientsService {
  private patients: Patient[] = [];

  findAll(): Patient[] {
    return this.patients;
  }

  findOne(id: string): Patient {
    const patient = this.patients.find((p) => p.id === id);
    if (!patient) {
      throw new NotFoundException(`Pasien dengan ID '${id}' tidak ditemukan`);
    }
    return patient;
  }

  create(createPatientDto: CreatePatientDto): Patient {
    const newPatient: Patient = {
      id: `pat-${Date.now().toString().slice(-4)}`,
      medicalRecordNumber: `RM-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      ...createPatientDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.patients.push(newPatient);
    return newPatient;
  }

  update(id: string, updatePatientDto: UpdatePatientDto): Patient {
    const patient = this.findOne(id);
    const index = this.patients.findIndex((p) => p.id === id);

    const updatedPatient = {
      ...patient,
      ...updatePatientDto,
      updatedAt: new Date(),
    };

    this.patients[index] = updatedPatient;
    return updatedPatient;
  }

  remove(id: string): void {
    const index = this.patients.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Pasien dengan ID '${id}' tidak ditemukan`);
    }
    this.patients.splice(index, 1);
  }
}