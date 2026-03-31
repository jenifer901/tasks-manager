import { Injectable, signal, computed } from "@angular/core";
import { Project } from "../../models/project.model";
import { MOCK_PROJECT } from "../../mocks/project.mock";

/**
 * Reemplaza el uso de NgRx usando en proyectos pequeños Signals Store Pattern
 * uso de signals 
 * tipo de signal computed
 * estado reactivo
 */

@Injectable({
    providedIn: 'root'
})
export class ProjectRepository {
    private projectsSignal = signal<Project[]>(MOCK_PROJECT);

    project = computed(() => this.projectsSignal());

    delete(id: string) {

        return computed(() => 
        this.projectsSignal.update( projects =>
          projects.filter(p => p.id === id))  
        )
        
    }

    add(project: Project) {
        this.projectsSignal.update(projects => [...projects, project]);
    }

}