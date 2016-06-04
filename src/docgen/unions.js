import Generator from './generator';
import { slug } from './utils';

export default class UnionsGenerator extends Generator {
  generateUnion(union) {
    const types = union.types.map((t) => this.linkType(t.type));
    return `
      <div id="type-${slug(union.name)}" class="flex my2 table-row">
        <div class="union-name col-2 mr3 right-align">${union.name}</div>
        <div class="union-types flex-auto">${types.join(', ')}</div>
      </div>
    `;
  }

  generate() {
    return `
      <section>
        <header>
          <h2 class="h2">Unions</h2>
        </header>
        <section class="unions">
          <div class="flex my2 table-row">
            <div class="union table-header col-2 mr3 right-align">Name</div>
            <div class="union-types table-header flex-auto">Types</div>
          </div>
          ${this.service.unions.map((union) => this.generateUnion(union)).join('\n')}
        </section>
      </section>
    `;
  }
}
