export class Patient {
  id: string;
  medicalRecordNumber: string;
  nik: string;
  fullName: string;
  gender: 'MALE' | 'FEMALE';
  dateOfBirth: string;
  phone: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}