import { State, Action, Selector, StateContext } from '@ngxs/store';
import {
  SelectedGridTemplate,
  SetActiveSplit, SetCategoryList,
  SetCurrentCategory, SetCurrentSplitOperation, SetFocusedSplit,
  SetImageUrls,
  SetIsImageLoaded,
  SetIsSeriesLoaded,
  SetSelectedImageById,
  SetSelectedImageByUrl,
  SetSelectedSeriesById,
  SetSelectedSplitWindowId, SetSeriesUrls, SetSplitAction,
  SetSplitMode,
  SetSplitCategory, SetWebworkerWorkingStatus,
  StatusAction
} from './status.actions';
import {Injectable} from "@angular/core";
import {ImageModel} from "../../app/models/data";
export interface ISelectedGridTemplate {
  templateName: string,
  button: 'left' | 'right'
}
export interface StatusStateModel {
  selectedGridTemplate: ISelectedGridTemplate;
  items: string[];
  isImageLoaded: {} ; // from 0
  isSeriesLoaded: boolean;
  imageUrls: string[]; //
  seriesUrls: string[]; //
  currentCategory: string;
  category_list: string[];
  focusedSplit: number;
  selectedImageId: ImageModel;
  selectedImageUrl: string;
  splitMode: number;
  splitCategory: string[];
  splitAction: boolean;
  selectedSeriesById: number;
  selectedSplitWindowId: string;
  webworkerWorkingStatus: boolean;
  currentSplitOperation: {},
  activeSplit: number
}

@State<StatusStateModel>({
  name: 'status',
  defaults: {
    selectedGridTemplate: {templateName: '', button: 'left'},
    items: [],
    isImageLoaded: { idx: 0},
    isSeriesLoaded: false,
    imageUrls: [],
    seriesUrls: [],
    currentCategory: '',
    //category_list:['animal', 'house', 'baby','forest', 'happiness', 'love','sea','banana' ],
    category_list:['animal', 'house', 'baby', 'forest', 'happiness', 'love', 'sea','banana', 'mountain'],
    focusedSplit: 0, // 0: split1, 1: split2, 2: split3, 3: split4
    selectedImageId: {
      imageId: 0,
      category: 'animal',
      url: '',
      blob: '',
      title: ''
    },
    selectedImageUrl: '',
    splitMode: 1, // 1: active --> split1, 2: active --> split1, split2
    splitCategory: ['animal', 'house', 'baby', 'forest'],
    splitAction: false,
    selectedSeriesById: 0,
    selectedSplitWindowId: 'element1',
    webworkerWorkingStatus: false,
    currentSplitOperation: {
      element: ''
    },
    activeSplit: 0
  }
})
@Injectable()
export class StatusState {

  @Selector()
  public static getSelectedGridTemplate(state: StatusStateModel) {
    return state.selectedGridTemplate;
  }
  @Selector()
  public static getState(state: StatusStateModel) {
    return state;
  }
  @Selector()
  public static getIsImageLoaded(state: StatusStateModel) {
    return state.isImageLoaded;
  }
  @Selector()
  public static getIsSeriesLoaded(state: StatusStateModel) {
    return state.isSeriesLoaded;
  }
  @Selector()
  public static getImageUrls(state: StatusStateModel) {
    return state.imageUrls;
  }
  @Selector()
  public static getSeriesUrls(state: StatusStateModel) {
    return state.seriesUrls;
  }
  @Selector()
  public static getCurrentCategory(state: StatusStateModel) {
    return state.currentCategory;
  }
  @Selector()
  public static getCategoryList(state: StatusStateModel) {
    return state.category_list;
  }
  @Selector()
  public static getFocusedSplit(state: StatusStateModel) {
    return state.focusedSplit;
  }
  @Selector()
  public static getSelectedImageById(state: StatusStateModel) {
    return state.selectedImageId;
  }
  @Selector()
  public static getSelectedImageByUrl(state: StatusStateModel) {
    return state.selectedImageUrl;
  }
  @Selector()
  public static getSplitMode(state: StatusStateModel) {
    return state.splitMode;
  }
  @Selector()
  public static getSplitCategories(state: StatusStateModel) {
    return state.splitCategory;
  }
  @Selector()
  public static getSplitAction(state: StatusStateModel) {
    return state.splitAction;
  }
  @Selector()
  public static getSelectedSeriesById(state: StatusStateModel) {
    return state.selectedSeriesById;
  }
  @Selector()
  public static getSelectedSplitWindowId(state: StatusStateModel) {
    return state.selectedSplitWindowId;
  }
  @Selector()
  public static getWebworkerWorkingStatus(state: StatusStateModel) {
    return state.webworkerWorkingStatus;
  }
  @Selector()
  public static getCurrentSplitOperation(state: StatusStateModel) {
    return state.currentSplitOperation;
  }
  @Selector()
  public static getActiveSplit(state: StatusStateModel) {
    return state.activeSplit;
  }

  @Action(SelectedGridTemplate)
  public selectedGridTemplate({patchState, getState}: StateContext<StatusStateModel>, { payload }: SelectedGridTemplate) {
    const obj = getState().selectedGridTemplate;
    // console.log(' payload', payload)
    patchState({selectedGridTemplate: {...obj, ...payload}});
  }
  @Action(StatusAction)
  public add(ctx: StateContext<StatusStateModel>, { payload }: StatusAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
  @Action(SetIsImageLoaded)
  public setIsImageLoaded({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetIsImageLoaded) {
    const obj = getState().isImageLoaded;
    patchState({isImageLoaded: {...obj, ...payload}})
  }
  @Action(SetIsSeriesLoaded)
  public setIsSeriesLoaded({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetIsSeriesLoaded) {
    patchState({isSeriesLoaded: payload})
  }
  @Action(SetImageUrls)
  public setImageUrls({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetImageUrls) {
    let urls = getState().imageUrls;
    patchState({imageUrls: [...urls, ...payload]});
  }
  @Action(SetSeriesUrls)
  public setSeriesUrls({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetSeriesUrls) {
    let urls = getState().seriesUrls;
    patchState({seriesUrls: [...urls, ...payload]});
  }
  @Action(SetCurrentCategory)
  public setCurrentCategory({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetCurrentCategory) {
    patchState({currentCategory: payload})
  }
  @Action(SetCategoryList)
  public setCategoryList({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetCategoryList) {
    patchState({category_list: payload})
  }
  @Action(SetFocusedSplit)
  public setFocusedSplit({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetFocusedSplit) {
    patchState({focusedSplit: payload})
  }
  @Action(SetSelectedImageById)
  public setSelectedImageById({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetSelectedImageById) {
    const imageId = getState().selectedImageId;
    patchState({selectedImageId: {...imageId, ...payload}})
  }
  @Action(SetSelectedImageByUrl)
  public setSelectedImageByUrl({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetSelectedImageByUrl) {
    patchState({selectedImageUrl: payload})
  }
  @Action(SetSplitMode)
  public setSplitMode({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetSplitMode) {
    patchState({splitMode: payload})
  }
  @Action(SetSplitCategory)
  public setSplitCategory({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetSplitCategory) {
    const state = getState().splitCategory;
    const idx = payload.idx;
    const category = payload.category
    state[idx] = category
    patchState({splitCategory: [...state]})
  }
  @Action(SetSplitAction)
  public setSplitAction({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetSplitAction) {
    patchState({splitAction: payload})
  }
  @Action(SetSelectedSeriesById)
  public setSelectedSeriesById({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetSelectedSeriesById) {
    patchState({selectedSeriesById: payload})
  }
  @Action(SetSelectedSplitWindowId)
  public setSelectedSplitWindowId({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetSelectedSplitWindowId) {
    patchState({selectedSplitWindowId: payload})
  }
  @Action(SetWebworkerWorkingStatus)
  public setWebworkerWorkingStatus({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetWebworkerWorkingStatus) {
    patchState({webworkerWorkingStatus: payload})
  }
  @Action(SetCurrentSplitOperation)
  public setCurrentSplitOperation({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetCurrentSplitOperation) {
    const obj = getState().currentSplitOperation;
    patchState({currentSplitOperation: { ...obj, ...payload }})
  }
  @Action(SetActiveSplit)
  public setActiveSplit({patchState,getState}: StateContext<StatusStateModel>, { payload }: SetActiveSplit) {
    patchState({activeSplit: payload})
  }

}
