import { Component, Vue, Inject } from 'vue-property-decorator';

import SelecionarLivroService from './selecionar-livro.service';
import { SelecionarLivroContext } from './selecionar-livro.model';

const validations: any = {
  taskContext: {
    receiverProcess: {
      emprestimo: {
        title: {},
      },
    },
  },
};

@Component({
  validations,
})
export default class SelecionarLivroExecuteComponent extends Vue {
  private selecionarLivroService: SelecionarLivroService = new SelecionarLivroService();
  private taskContext: SelecionarLivroContext = {};
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.taskInstanceId) {
        vm.claimTaskInstance(to.params.taskInstanceId);
      }
    });
  }

  public claimTaskInstance(taskInstanceId) {
    this.selecionarLivroService.claim(taskInstanceId).then(res => {
      this.taskContext = res;
    });
  }

  public previousState() {
    this.$router.go(-1);
  }

  public complete() {
    this.selecionarLivroService.complete(this.taskContext).then(res => {
      this.$router.go(-1);
    });
  }

  public initRelationships(): void {}
}
