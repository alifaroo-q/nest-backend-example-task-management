import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(private userRepository: UsersRepository) {}

  async signup(authCredentials: AuthCredentialsDto): Promise<void> {
    return this.userRepository.createUser(authCredentials);
  }
}
