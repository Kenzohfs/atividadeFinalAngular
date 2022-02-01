import { JogosModule } from './jogos.module';

describe('JogosModule', () => {
  let jogosModule: JogosModule;

  beforeEach(() => {
    jogosModule = new JogosModule();
  });

  it('should create an instance', () => {
    expect(jogosModule).toBeTruthy();
  });
});
