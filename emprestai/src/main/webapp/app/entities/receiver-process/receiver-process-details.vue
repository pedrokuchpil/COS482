<template>
  <div class="row justify-content-center">
    <div class="col-10">
      <div v-if="receiverProcess.processInstance">
        <h2 class="jh-entity-heading" data-cy="receiverProcessDetailsHeading">
          <span v-text="$t('emprestaiApp.receiverProcess.detail.title')">ReceiverProcess</span> {{ receiverProcess.id }}
        </h2>
        <akip-show-process-instance :processInstance="receiverProcess.processInstance">
          <template v-slot:title>
            <span v-text="$t('emprestaiApp.receiverProcess.detail.title')">ReceiverProcess</span> #{{ receiverProcess.id }}
          </template>
          <template v-slot:details>
            <div class="card" v-if="receiverProcess.emprestimo">
              <h5 class="card-header">
                <span class="title"> Emprestimo #{{ receiverProcess.emprestimo.id }} </span>
              </h5>
              <div class="card-body py-0">
                <div class="form-group">
                  <label class="form-control-label" v-text="$t('emprestaiApp.receiverProcess.date')">date</label>
                  <input
                    readonly
                    type="text"
                    class="form-control"
                    name="date"
                    id="emprestimo-date"
                    data-cy="date"
                    v-model="receiverProcess.emprestimo.date"
                  />
                </div>
              </div>
              <div class="card-body py-0">
                <div class="form-group">
                  <label class="form-control-label" v-text="$t('emprestaiApp.receiverProcess.book')" for="receiver-process-book"
                    >Book</label
                  >
                  <input
                    v-if="receiverProcess.emprestimo.book"
                    readonly
                    type="text"
                    class="form-control"
                    name="book"
                    id="emprestimo-book"
                    data-cy="book"
                    :value="receiverProcess.emprestimo.book.title"
                  />
                  <input v-else readonly type="text" class="form-control" name="book" id="emprestimo-book" data-cy="book" value="" />
                </div>
              </div>
            </div>
          </template>
        </akip-show-process-instance>
        <br />
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./receiver-process-details.component.ts"></script>
