<template>
  <div>
    <h2 class="jh-entity-heading" data-cy="chooseProcessDetailsHeading">
      <span v-text="$t('emprestaiApp.chooseProcess.home.title')">ChooseProcess</span>
      <div class="d-flex justify-content-end">
        <button class="btn btn-info mr-2" v-on:click="handleSyncList" :disabled="isFetching">
          <font-awesome-icon icon="sync" :spin="isFetching"></font-awesome-icon>
          <span v-text="$t('emprestaiApp.chooseProcess.home.refreshListLabel')">Refresh List</span>
        </button>

        <router-link :to="`/process-definition/ChooseProcess/init`" tag="button" class="btn btn-primary mr-2">
          <font-awesome-icon icon="plus"></font-awesome-icon>
          <span v-text="$t('emprestaiApp.chooseProcess.home.createLabel')"> Create a new Travel Plan Process Instance </span>
        </router-link>
      </div>
    </h2>
    <br />
    <div class="alert alert-warning" v-if="!isFetching && chooseProcessList && chooseProcessList.length === 0">
      <span v-text="$t('emprestaiApp.chooseProcess.home.notFound')">No chooseProcess found</span>
    </div>
    <div class="table-responsive" v-if="chooseProcessList && chooseProcessList.length > 0">
      <table class="table table-striped" aria-describedby="chooseProcessList">
        <thead>
          <tr>
            <th scope="row"><span v-text="$t('global.field.id')">ID</span></th>
            <th scope="row"><span>Process Instance</span></th>
            <th scope="row"><span>Emprestimo</span></th>
            <th scope="row"><span>Status</span></th>
            <th scope="row"><span>Start Date</span></th>
            <th scope="row"><span>End Date</span></th>
            <th scope="row"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="chooseProcess in chooseProcessList" :key="chooseProcess.id" data-cy="entityTable">
            <td>{{ chooseProcess.id }}</td>
            <td>
              <div v-if="chooseProcess.processInstance">
                <router-link :to="`/process-definition/ChooseProcess/instance/${chooseProcess.processInstance.id}/view`">
                  {{ chooseProcess.processInstance.businessKey }}
                </router-link>
              </div>
            </td>
            <td>
              <div v-if="chooseProcess.emprestimo">
                <router-link :to="{ name: 'EmprestimoView', params: { emprestimoId: chooseProcess.emprestimo.id } }">{{
                  chooseProcess.emprestimo.id
                }}</router-link>
              </div>
            </td>
            <td>
              <akip-show-process-instance-status :status="chooseProcess.processInstance.status"></akip-show-process-instance-status>
            </td>
            <td>{{ chooseProcess.processInstance.startDate ? $d(Date.parse(chooseProcess.processInstance.startDate), 'short') : '' }}</td>
            <td>{{ chooseProcess.processInstance.endDate ? $d(Date.parse(chooseProcess.processInstance.endDate), 'short') : '' }}</td>
            <td class="text-right">
              <div class="btn-group">
                <router-link
                  :to="`/process-definition/ChooseProcess/instance/${chooseProcess.processInstance.id}/view`"
                  tag="button"
                  class="btn btn-info btn-sm details"
                  data-cy="entityDetailsButton"
                >
                  <font-awesome-icon icon="eye"></font-awesome-icon>
                  <span class="d-none d-md-inline" v-text="$t('entity.action.view')">View</span>
                </router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
      <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="$t('entity.action.back')"> Back</span>
    </button>
  </div>
</template>

<script lang="ts" src="./choose-process-list.component.ts"></script>
