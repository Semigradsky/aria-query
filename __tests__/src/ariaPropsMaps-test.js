import expect from 'expect';
import ariaPropsMap from '../../src/ariaPropsMap';
import rolesMap from '../../src/rolesMap';

describe('ariaPropsMap API', function () {
  it('entries', function () {
    expect(ariaPropsMap.entries()).toEqual(
      expect.arrayContaining(
        [
          ['aria-activedescendant', {'type': 'id'}],
          ['aria-atomic', {'type': 'boolean'}],
          ['aria-autocomplete', {'type': 'token','values': ['inline','list','both','none']}],
          ['aria-busy', {'type': 'boolean'}],
          ['aria-checked', {'type': 'tristate'}],
          ['aria-colcount', {type: 'integer',}],
          ['aria-colindex', {type: 'integer',}],
          ['aria-colspan', {type: 'integer',}],
          ['aria-controls', {'type': 'idlist'}],
          ['aria-current', {type: 'token',values: ['page','step','location','date','time',true,false,],}],
          ['aria-describedby', {'type': 'idlist'}],
          ['aria-details', {'type': 'id'}],
          ['aria-disabled', {'type': 'boolean'}],
          ['aria-dropeffect', {'type': 'tokenlist','values': ['copy','execute','link','move','none','popup']}],
          ['aria-errormessage', {'type': 'id'}],
          ['aria-expanded', {'type': 'boolean','allowundefined': true}],
          ['aria-flowto', {'type': 'idlist'}],
          ['aria-grabbed', {'type': 'boolean','allowundefined': true}],
          ['aria-haspopup', {'type': 'token','values': [false,true,'menu','listbox','tree','grid','dialog']}],
          ['aria-hidden', {'type': 'boolean','allowundefined': true}],
          ['aria-invalid', {'type': 'token','values': ['grammar',false,'spelling',true]}],
          ['aria-keyshortcuts', {type: 'string',}],
          ['aria-label', {'type': 'string'}],
          ['aria-labelledby', {'type': 'idlist'}],
          ['aria-level', {'type': 'integer'}],
          ['aria-live', {'type': 'token','values': ['assertive','off','polite']}],
          ['aria-modal', {type: 'boolean',}],
          ['aria-multiline', {'type': 'boolean'}],
          ['aria-multiselectable', {'type': 'boolean'}],
          ['aria-orientation', {'type': 'token','values': ['vertical','undefined','horizontal']}],
          ['aria-owns', {'type': 'idlist'}],
          ['aria-placeholder', {type: 'string',}],
          ['aria-posinset', {'type': 'integer'}],
          ['aria-pressed', {'type': 'tristate'}],
          ['aria-readonly', {'type': 'boolean'}],
          ['aria-relevant', {'type': 'tokenlist','values': ['additions','all','removals','text',]}],
          ['aria-required', {'type': 'boolean'}],
          ['aria-roledescription', {type: 'string',}],
          ['aria-rowcount', {type: 'integer',}],
          ['aria-rowindex', {type: 'integer',}],
          ['aria-rowspan', {type: 'integer',}],
          ['aria-selected', {'type': 'boolean','allowundefined': true}],
          ['aria-setsize', {'type': 'integer'}],
          ['aria-sort', {'type': 'token','values': ['ascending','descending','none','other']}],
          ['aria-valuemax', {'type': 'number'}],
          ['aria-valuemin', {'type': 'number'}],
          ['aria-valuenow', {'type': 'number'}],
          ['aria-valuetext', {'type': 'string'}],
        ],
      ),
    );
    expect([...ariaPropsMap.entries()]).toEqual(
      expect.arrayContaining(
        [
          ['aria-activedescendant', {'type': 'id'}],
          ['aria-atomic', {'type': 'boolean'}],
          ['aria-autocomplete', {'type': 'token','values': ['inline','list','both','none']}],
          ['aria-busy', {'type': 'boolean'}],
          ['aria-checked', {'type': 'tristate'}],
          ['aria-colcount', {type: 'integer',}],
          ['aria-colindex', {type: 'integer',}],
          ['aria-colspan', {type: 'integer',}],
          ['aria-controls', {'type': 'idlist'}],
          ['aria-current', {type: 'token',values: ['page','step','location','date','time',true,false,],}],
          ['aria-describedby', {'type': 'idlist'}],
          ['aria-details', {'type': 'id'}],
          ['aria-disabled', {'type': 'boolean'}],
          ['aria-dropeffect', {'type': 'tokenlist','values': ['copy','execute','link','move','none','popup']}],
          ['aria-errormessage', {'type': 'id'}],
          ['aria-expanded', {'type': 'boolean','allowundefined': true}],
          ['aria-flowto', {'type': 'idlist'}],
          ['aria-grabbed', {'type': 'boolean','allowundefined': true}],
          ['aria-haspopup', {'type': 'token','values': [false,true,'menu','listbox','tree','grid','dialog']}],
          ['aria-hidden', {'type': 'boolean','allowundefined': true}],
          ['aria-invalid', {'type': 'token','values': ['grammar',false,'spelling',true]}],
          ['aria-keyshortcuts', {type: 'string',}],
          ['aria-label', {'type': 'string'}],
          ['aria-labelledby', {'type': 'idlist'}],
          ['aria-level', {'type': 'integer'}],
          ['aria-live', {'type': 'token','values': ['assertive','off','polite']}],
          ['aria-modal', {type: 'boolean',}],
          ['aria-multiline', {'type': 'boolean'}],
          ['aria-multiselectable', {'type': 'boolean'}],
          ['aria-orientation', {'type': 'token','values': ['vertical','undefined','horizontal']}],
          ['aria-owns', {'type': 'idlist'}],
          ['aria-placeholder', {type: 'string',}],
          ['aria-posinset', {'type': 'integer'}],
          ['aria-pressed', {'type': 'tristate'}],
          ['aria-readonly', {'type': 'boolean'}],
          ['aria-relevant', {'type': 'tokenlist','values': ['additions','all','removals','text',]}],
          ['aria-required', {'type': 'boolean'}],
          ['aria-roledescription', {type: 'string',}],
          ['aria-rowcount', {type: 'integer',}],
          ['aria-rowindex', {type: 'integer',}],
          ['aria-rowspan', {type: 'integer',}],
          ['aria-selected', {'type': 'boolean','allowundefined': true}],
          ['aria-setsize', {'type': 'integer'}],
          ['aria-sort', {'type': 'token','values': ['ascending','descending','none','other']}],
          ['aria-valuemax', {'type': 'number'}],
          ['aria-valuemin', {'type': 'number'}],
          ['aria-valuenow', {'type': 'number'}],
          ['aria-valuetext', {'type': 'string'}],
        ],
      ),
    );
  });
  it('forEach', function () {
    const output = [];
    let context;
    ariaPropsMap.forEach((value, key, map) => {
      output.push([key, value]);
      if (!context) {
        context = map;
      }
    });
    expect(output).toEqual(
      expect.arrayContaining(
        [
          ['aria-activedescendant', {'type': 'id'}],
          ['aria-atomic', {'type': 'boolean'}],
          ['aria-autocomplete', {'type': 'token','values': ['inline','list','both','none']}],
          ['aria-busy', {'type': 'boolean'}],
          ['aria-checked', {'type': 'tristate'}],
          ['aria-colcount', {type: 'integer',}],
          ['aria-colindex', {type: 'integer',}],
          ['aria-colspan', {type: 'integer',}],
          ['aria-controls', {'type': 'idlist'}],
          ['aria-current', {type: 'token',values: ['page','step','location','date','time',true,false,],}],
          ['aria-describedby', {'type': 'idlist'}],
          ['aria-details', {'type': 'id'}],
          ['aria-disabled', {'type': 'boolean'}],
          ['aria-dropeffect', {'type': 'tokenlist','values': ['copy','execute','link','move','none','popup']}],
          ['aria-errormessage', {'type': 'id'}],
          ['aria-expanded', {'type': 'boolean','allowundefined': true}],
          ['aria-flowto', {'type': 'idlist'}],
          ['aria-grabbed', {'type': 'boolean','allowundefined': true}],
          ['aria-haspopup', {'type': 'token','values': [false,true,'menu','listbox','tree','grid','dialog']}],
          ['aria-hidden', {'type': 'boolean','allowundefined': true}],
          ['aria-invalid', {'type': 'token','values': ['grammar',false,'spelling',true]}],
          ['aria-keyshortcuts', {type: 'string',}],
          ['aria-label', {'type': 'string'}],
          ['aria-labelledby', {'type': 'idlist'}],
          ['aria-level', {'type': 'integer'}],
          ['aria-live', {'type': 'token','values': ['assertive','off','polite']}],
          ['aria-modal', {type: 'boolean',}],
          ['aria-multiline', {'type': 'boolean'}],
          ['aria-multiselectable', {'type': 'boolean'}],
          ['aria-orientation', {'type': 'token','values': ['vertical','undefined','horizontal']}],
          ['aria-owns', {'type': 'idlist'}],
          ['aria-placeholder', {type: 'string',}],
          ['aria-posinset', {'type': 'integer'}],
          ['aria-pressed', {'type': 'tristate'}],
          ['aria-readonly', {'type': 'boolean'}],
          ['aria-relevant', {'type': 'tokenlist','values': ['additions','all','removals','text',]}],
          ['aria-required', {'type': 'boolean'}],
          ['aria-roledescription', {type: 'string',}],
          ['aria-rowcount', {type: 'integer',}],
          ['aria-rowindex', {type: 'integer',}],
          ['aria-rowspan', {type: 'integer',}],
          ['aria-selected', {'type': 'boolean','allowundefined': true}],
          ['aria-setsize', {'type': 'integer'}],
          ['aria-sort', {'type': 'token','values': ['ascending','descending','none','other']}],
          ['aria-valuemax', {'type': 'number'}],
          ['aria-valuemin', {'type': 'number'}],
          ['aria-valuenow', {'type': 'number'}],
          ['aria-valuetext', {'type': 'string'}],
        ],
      ),
    );
    expect(context).toEqual(
      expect.arrayContaining(
        [
          ['aria-activedescendant', {'type': 'id'}],
          ['aria-atomic', {'type': 'boolean'}],
          ['aria-autocomplete', {'type': 'token','values': ['inline','list','both','none']}],
          ['aria-busy', {'type': 'boolean'}],
          ['aria-checked', {'type': 'tristate'}],
          ['aria-colcount', {type: 'integer',}],
          ['aria-colindex', {type: 'integer',}],
          ['aria-colspan', {type: 'integer',}],
          ['aria-controls', {'type': 'idlist'}],
          ['aria-current', {type: 'token',values: ['page','step','location','date','time',true,false,],}],
          ['aria-describedby', {'type': 'idlist'}],
          ['aria-details', {'type': 'id'}],
          ['aria-disabled', {'type': 'boolean'}],
          ['aria-dropeffect', {'type': 'tokenlist','values': ['copy','execute','link','move','none','popup']}],
          ['aria-errormessage', {'type': 'id'}],
          ['aria-expanded', {'type': 'boolean','allowundefined': true}],
          ['aria-flowto', {'type': 'idlist'}],
          ['aria-grabbed', {'type': 'boolean','allowundefined': true}],
          ['aria-haspopup', {'type': 'token','values': [false,true,'menu','listbox','tree','grid','dialog']}],
          ['aria-hidden', {'type': 'boolean','allowundefined': true}],
          ['aria-invalid', {'type': 'token','values': ['grammar',false,'spelling',true]}],
          ['aria-keyshortcuts', {type: 'string',}],
          ['aria-label', {'type': 'string'}],
          ['aria-labelledby', {'type': 'idlist'}],
          ['aria-level', {'type': 'integer'}],
          ['aria-live', {'type': 'token','values': ['assertive','off','polite']}],
          ['aria-modal', {type: 'boolean',}],
          ['aria-multiline', {'type': 'boolean'}],
          ['aria-multiselectable', {'type': 'boolean'}],
          ['aria-orientation', {'type': 'token','values': ['vertical','undefined','horizontal']}],
          ['aria-owns', {'type': 'idlist'}],
          ['aria-placeholder', {type: 'string',}],
          ['aria-posinset', {'type': 'integer'}],
          ['aria-pressed', {'type': 'tristate'}],
          ['aria-readonly', {'type': 'boolean'}],
          ['aria-relevant', {'type': 'tokenlist','values': ['additions','all','removals','text',]}],
          ['aria-required', {'type': 'boolean'}],
          ['aria-roledescription', {type: 'string',}],
          ['aria-rowcount', {type: 'integer',}],
          ['aria-rowindex', {type: 'integer',}],
          ['aria-rowspan', {type: 'integer',}],
          ['aria-selected', {'type': 'boolean','allowundefined': true}],
          ['aria-setsize', {'type': 'integer'}],
          ['aria-sort', {'type': 'token','values': ['ascending','descending','none','other']}],
          ['aria-valuemax', {'type': 'number'}],
          ['aria-valuemin', {'type': 'number'}],
          ['aria-valuenow', {'type': 'number'}],
          ['aria-valuetext', {'type': 'string'}],
        ],
      ),
    );
  });
  it('get', function () {
    expect(ariaPropsMap.get('aria-label')).toBeDefined();
    expect(ariaPropsMap.get('fake prop')).toBeUndefined();
  });
  it('has', function () {
    expect(ariaPropsMap.has('aria-label')).toEqual(true);
    expect(ariaPropsMap.has('fake prop')).toEqual(false);
  });
  it('keys', function () {
    expect(ariaPropsMap.keys()).toEqual(
      expect.arrayContaining(
        [
          'aria-activedescendant',
          'aria-atomic',
          'aria-autocomplete',
          'aria-busy',
          'aria-checked',
          'aria-colcount',
          'aria-colindex',
          'aria-colspan',
          'aria-controls',
          'aria-current',
          'aria-describedby',
          'aria-details',
          'aria-disabled',
          'aria-dropeffect',
          'aria-errormessage',
          'aria-expanded',
          'aria-flowto',
          'aria-grabbed',
          'aria-haspopup',
          'aria-hidden',
          'aria-invalid',
          'aria-keyshortcuts',
          'aria-label',
          'aria-labelledby',
          'aria-level',
          'aria-live',
          'aria-modal',
          'aria-multiline',
          'aria-multiselectable',
          'aria-orientation',
          'aria-owns',
          'aria-placeholder',
          'aria-posinset',
          'aria-pressed',
          'aria-readonly',
          'aria-relevant',
          'aria-required',
          'aria-roledescription',
          'aria-rowcount',
          'aria-rowindex',
          'aria-rowspan',
          'aria-selected',
          'aria-setsize',
          'aria-sort',
          'aria-valuemax',
          'aria-valuemin',
          'aria-valuenow',
          'aria-valuetext',
        ],
      ),
    );
    expect([...ariaPropsMap.keys()]).toEqual(
      expect.arrayContaining(
        [
          'aria-activedescendant',
          'aria-atomic',
          'aria-autocomplete',
          'aria-busy',
          'aria-checked',
          'aria-colcount',
          'aria-colindex',
          'aria-colspan',
          'aria-controls',
          'aria-current',
          'aria-describedby',
          'aria-details',
          'aria-disabled',
          'aria-dropeffect',
          'aria-errormessage',
          'aria-expanded',
          'aria-flowto',
          'aria-grabbed',
          'aria-haspopup',
          'aria-hidden',
          'aria-invalid',
          'aria-keyshortcuts',
          'aria-label',
          'aria-labelledby',
          'aria-level',
          'aria-live',
          'aria-modal',
          'aria-multiline',
          'aria-multiselectable',
          'aria-orientation',
          'aria-owns',
          'aria-placeholder',
          'aria-posinset',
          'aria-pressed',
          'aria-readonly',
          'aria-relevant',
          'aria-required',
          'aria-roledescription',
          'aria-rowcount',
          'aria-rowindex',
          'aria-rowspan',
          'aria-selected',
          'aria-setsize',
          'aria-sort',
          'aria-valuemax',
          'aria-valuemin',
          'aria-valuenow',
          'aria-valuetext',
        ],
      ),
    );
  });
  it('values', function () {
    expect(ariaPropsMap.values()).toEqual(
      expect.arrayContaining(
        [
          {'type': 'id'},
          {'type': 'boolean'},
          {'type': 'token','values': ['inline','list','both','none']},
          {'type': 'boolean'},
          {'type': 'tristate'},
          {'type': 'integer',},
          {'type': 'integer',},
          {'type': 'integer',},
          {'type': 'idlist'},
          {'type': 'token',values: ['page','step','location','date','time',true,false,],},
          {'type': 'idlist'},
          {'type': 'id'},
          {'type': 'boolean'},
          {'type': 'tokenlist','values': ['copy','execute','link','move','none','popup']},
          {'type': 'id'},
          {'type': 'boolean','allowundefined': true},
          {'type': 'idlist'},
          {'type': 'boolean','allowundefined': true},
          {'type': 'token','values': [false,true,'menu','listbox','tree','grid','dialog']},
          {'type': 'boolean','allowundefined': true},
          {'type': 'token','values': ['grammar',false,'spelling',true]},
          {'type': 'string',},
          {'type': 'string'},
          {'type': 'idlist'},
          {'type': 'integer'},
          {'type': 'token','values': ['assertive','off','polite']},
          {'type': 'boolean',},
          {'type': 'boolean'},
          {'type': 'boolean'},
          {'type': 'token','values': ['vertical','undefined','horizontal']},
          {'type': 'idlist'},
          {'type': 'string',},
          {'type': 'integer'},
          {'type': 'tristate'},
          {'type': 'boolean'},
          {'type': 'tokenlist','values': ['additions','all','removals','text',]},
          {'type': 'boolean'},
          {'type': 'string',},
          {'type': 'integer',},
          {'type': 'integer',},
          {'type': 'integer',},
          {'type': 'boolean','allowundefined': true},
          {'type': 'integer'},
          {'type': 'token','values': ['ascending','descending','none','other']},
          {'type': 'number'},
          {'type': 'number'},
          {'type': 'number'},
          {'type': 'string'},
        ],
      ),
    );
    expect([...ariaPropsMap.values()]).toEqual(
      expect.arrayContaining(
        [
          {'type': 'id'},
          {'type': 'boolean'},
          {'type': 'token','values': ['inline','list','both','none']},
          {'type': 'boolean'},
          {'type': 'tristate'},
          {'type': 'integer',},
          {'type': 'integer',},
          {'type': 'integer',},
          {'type': 'idlist'},
          {'type': 'token',values: ['page','step','location','date','time',true,false,],},
          {'type': 'idlist'},
          {'type': 'id'},
          {'type': 'boolean'},
          {'type': 'tokenlist','values': ['copy','execute','link','move','none','popup']},
          {'type': 'id'},
          {'type': 'boolean','allowundefined': true},
          {'type': 'idlist'},
          {'type': 'boolean','allowundefined': true},
          {'type': 'token','values': [false,true,'menu','listbox','tree','grid','dialog']},
          {'type': 'boolean','allowundefined': true},
          {'type': 'token','values': ['grammar',false,'spelling',true]},
          {'type': 'string',},
          {'type': 'string'},
          {'type': 'idlist'},
          {'type': 'integer'},
          {'type': 'token','values': ['assertive','off','polite']},
          {'type': 'boolean',},
          {'type': 'boolean'},
          {'type': 'boolean'},
          {'type': 'token','values': ['vertical','undefined','horizontal']},
          {'type': 'idlist'},
          {'type': 'string',},
          {'type': 'integer'},
          {'type': 'tristate'},
          {'type': 'boolean'},
          {'type': 'tokenlist','values': ['additions','all','removals','text',]},
          {'type': 'boolean'},
          {'type': 'string',},
          {'type': 'integer',},
          {'type': 'integer',},
          {'type': 'integer',},
          {'type': 'boolean','allowundefined': true},
          {'type': 'integer'},
          {'type': 'token','values': ['ascending','descending','none','other']},
          {'type': 'number'},
          {'type': 'number'},
          {'type': 'number'},
          {'type': 'string'},
        ],
      ),
    );
  });
});

describe('ariaPropsMap', function () {
  describe('iteration', function () {
    it('should have an iterator defined', function () {
      expect(ariaPropsMap[Symbol.iterator]).not.toBeUndefined();
    });
    it('should support the spread operator', function () {
      expect(ariaPropsMap.entries().length).toEqual(48);
      expect([...ariaPropsMap]).toEqual(
        expect.arrayContaining(
          [
            ['aria-activedescendant', {'type': 'id'}],
            ['aria-atomic', {'type': 'boolean'}],
            ['aria-autocomplete', {'type': 'token','values': ['inline','list','both','none']}],
            ['aria-busy', {'type': 'boolean'}],
            ['aria-checked', {'type': 'tristate'}],
            ['aria-colcount', {type: 'integer',}],
            ['aria-colindex', {type: 'integer',}],
            ['aria-colspan', {type: 'integer',}],
            ['aria-controls', {'type': 'idlist'}],
            ['aria-current', {type: 'token',values: ['page','step','location','date','time',true,false,],}],
            ['aria-describedby', {'type': 'idlist'}],
            ['aria-details', {'type': 'id'}],
            ['aria-disabled', {'type': 'boolean'}],
            ['aria-dropeffect', {'type': 'tokenlist','values': ['copy','execute','link','move','none','popup']}],
            ['aria-errormessage', {'type': 'id'}],
            ['aria-expanded', {'type': 'boolean','allowundefined': true}],
            ['aria-flowto', {'type': 'idlist'}],
            ['aria-grabbed', {'type': 'boolean','allowundefined': true}],
            ['aria-haspopup', {'type': 'token','values': [false,true,'menu','listbox','tree','grid','dialog']}],
            ['aria-hidden', {'type': 'boolean','allowundefined': true}],
            ['aria-invalid', {'type': 'token','values': ['grammar',false,'spelling',true]}],
            ['aria-keyshortcuts', {type: 'string',}],
            ['aria-label', {'type': 'string'}],
            ['aria-labelledby', {'type': 'idlist'}],
            ['aria-level', {'type': 'integer'}],
            ['aria-live', {'type': 'token','values': ['assertive','off','polite']}],
            ['aria-modal', {type: 'boolean',}],
            ['aria-multiline', {'type': 'boolean'}],
            ['aria-multiselectable', {'type': 'boolean'}],
            ['aria-orientation', {'type': 'token','values': ['vertical','undefined','horizontal']}],
            ['aria-owns', {'type': 'idlist'}],
            ['aria-placeholder', {type: 'string',}],
            ['aria-posinset', {'type': 'integer'}],
            ['aria-pressed', {'type': 'tristate'}],
            ['aria-readonly', {'type': 'boolean'}],
            ['aria-relevant', {'type': 'tokenlist','values': ['additions','all','removals','text',]}],
            ['aria-required', {'type': 'boolean'}],
            ['aria-roledescription', {type: 'string',}],
            ['aria-rowcount', {type: 'integer',}],
            ['aria-rowindex', {type: 'integer',}],
            ['aria-rowspan', {type: 'integer',}],
            ['aria-selected', {'type': 'boolean','allowundefined': true}],
            ['aria-setsize', {'type': 'integer'}],
            ['aria-sort', {'type': 'token','values': ['ascending','descending','none','other']}],
            ['aria-valuemax', {'type': 'number'}],
            ['aria-valuemin', {'type': 'number'}],
            ['aria-valuenow', {'type': 'number'}],
            ['aria-valuetext', {'type': 'string'}],
          ],
        ),
      );
    });
    it('should support the for..of pattern', function () {
      const output = [];
      for (const [key, value] of ariaPropsMap) {
        output.push([key, value]);
      }
      expect(output).toEqual(
        expect.arrayContaining(
          [
            ['aria-activedescendant', {'type': 'id'}],
            ['aria-atomic', {'type': 'boolean'}],
            ['aria-autocomplete', {'type': 'token','values': ['inline','list','both','none']}],
            ['aria-busy', {'type': 'boolean'}],
            ['aria-checked', {'type': 'tristate'}],
            ['aria-colcount', {type: 'integer',}],
            ['aria-colindex', {type: 'integer',}],
            ['aria-colspan', {type: 'integer',}],
            ['aria-controls', {'type': 'idlist'}],
            ['aria-current', {type: 'token',values: ['page','step','location','date','time',true,false,],}],
            ['aria-describedby', {'type': 'idlist'}],
            ['aria-details', {'type': 'id'}],
            ['aria-disabled', {'type': 'boolean'}],
            ['aria-dropeffect', {'type': 'tokenlist','values': ['copy','execute','link','move','none','popup']}],
            ['aria-errormessage', {'type': 'id'}],
            ['aria-expanded', {'type': 'boolean','allowundefined': true}],
            ['aria-flowto', {'type': 'idlist'}],
            ['aria-grabbed', {'type': 'boolean','allowundefined': true}],
            ['aria-haspopup', {'type': 'token','values': [false,true,'menu','listbox','tree','grid','dialog']}],
            ['aria-hidden', {'type': 'boolean','allowundefined': true}],
            ['aria-invalid', {'type': 'token','values': ['grammar',false,'spelling',true]}],
            ['aria-keyshortcuts', {type: 'string',}],
            ['aria-label', {'type': 'string'}],
            ['aria-labelledby', {'type': 'idlist'}],
            ['aria-level', {'type': 'integer'}],
            ['aria-live', {'type': 'token','values': ['assertive','off','polite']}],
            ['aria-modal', {type: 'boolean',}],
            ['aria-multiline', {'type': 'boolean'}],
            ['aria-multiselectable', {'type': 'boolean'}],
            ['aria-orientation', {'type': 'token','values': ['vertical','undefined','horizontal']}],
            ['aria-owns', {'type': 'idlist'}],
            ['aria-placeholder', {type: 'string',}],
            ['aria-posinset', {'type': 'integer'}],
            ['aria-pressed', {'type': 'tristate'}],
            ['aria-readonly', {'type': 'boolean'}],
            ['aria-relevant', {'type': 'tokenlist','values': ['additions','all','removals','text',]}],
            ['aria-required', {'type': 'boolean'}],
            ['aria-roledescription', {type: 'string',}],
            ['aria-rowcount', {type: 'integer',}],
            ['aria-rowindex', {type: 'integer',}],
            ['aria-rowspan', {type: 'integer',}],
            ['aria-selected', {'type': 'boolean','allowundefined': true}],
            ['aria-setsize', {'type': 'integer'}],
            ['aria-sort', {'type': 'token','values': ['ascending','descending','none','other']}],
            ['aria-valuemax', {'type': 'number'}],
            ['aria-valuemin', {'type': 'number'}],
            ['aria-valuenow', {'type': 'number'}],
            ['aria-valuetext', {'type': 'string'}],
          ],
        ),
      );
    });
  });
  describe('props and role defintions', function () {
    const usedProps = [];
    for (const roleDefinition of rolesMap.values()) {
      for (const prop of Object.keys(roleDefinition.props)) {
        let isUnique = true;
        for (let i = 0; i < usedProps.length; i++) {
          if (usedProps[i] === prop) {
            isUnique = false;
            break;
          }
        }
        if (isUnique) {
          usedProps.push(prop);
        }
      }
    }
    test.each(ariaPropsMap.entries())(
      'The prop %s should be used in at least one role definition',
      (prop) => {
        expect(usedProps.find(p => p === prop)).toBeDefined();
      }
    );
  });
});
