<template>
  <div class="row justify-content-center">
    <div class="col-10">
      <h2 id="page-heading" data-cy="TaskInstanceHeading">
        <span v-text="$t('emprestaiApp.taskInstance.details.title')" id="task-instance-heading">Task Details</span>
      </h2>
      <div v-if="taskContext.taskInstance">
        <akip-show-task-instance :taskInstance="taskContext.taskInstance">
          <template v-slot:body>
            <hr />
            <div class="form-group">
              <label class="form-control-label" v-text="$t('emprestaiApp.selecionarLivro.date')">date</label>
              <input
                readonly
                type="text"
                class="form-control"
                name="date"
                id="emprestimo-date"
                data-cy="date"
                v-model="taskContext.receiverProcess.emprestimo.date"
              />
            </div>
            <div class="form-group">
              <label class="form-control-label" v-text="$t('emprestaiApp.selecionarLivro.book')" for="selecionar-livro-book">Book</label>
              <input
                v-if="taskContext.receiverProcess.emprestimo.book"
                readonly
                type="text"
                class="form-control"
                name="book"
                id="emprestimo-book"
                data-cy="book"
                :value="taskContext.receiverProcess.emprestimo.book.title"
              />
              <input v-else readonly type="text" class="form-control" name="book" id="emprestimo-book" data-cy="book" value="" />
            </div>
          </template>
        </akip-show-task-instance>
        <br />
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
        </button>

        <router-link
          v-if="taskContext.taskInstance.status == 'NEW' || taskContext.taskInstance.status == 'ASSIGNED'"
          :to="`/process-definition/ReceiverProcess/task/SelecionarLivro/${taskContext.taskInstance.id}/execute`"
          tag="button"
          class="btn btn-primary"
          data-cy="entityDetailsButton"
        >
          <font-awesome-icon icon="play"></font-awesome-icon>&nbsp;Execute
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./selecionar-livro-details.component.ts"></script>
