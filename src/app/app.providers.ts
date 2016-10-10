import { MdIconRegistry } from '@angular/material/icon';
import { MdUniqueSelectionDispatcher } from '@angular/material/core';

import { ModalService } from './shared/modal/modal.service';
import { ToastService } from './shared/toast/toast.service';
// import { SpinnerService } from './shared/spinner/spinner.service';
import { EntityService } from './shared/entity.service';
// import { ExceptionService } from './shared/exception.service';
// import { FilterService } from './shared/filter-text/filter-text.service';

export const APP_PROVIDERS = [
    EntityService,
    // ExceptionService,
    // FilterService,
    ModalService,
    // SpinnerService,
    ToastService,
    MdIconRegistry,
    MdUniqueSelectionDispatcher
];
