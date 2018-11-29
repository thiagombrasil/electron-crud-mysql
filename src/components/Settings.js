import React from 'react';

const Settings = () => (
    <div id="modal1" className="modal modal-fixed-footer">
        <div className="modal-header">
            <span className="modal-title">Configurações</span>
        </div>
        <div className="modal-content">
            <div className="row">
                <form className="col s12">
                    <h6>Configurações de BD</h6>
                    <div className="row">
                        <div className="input-field col 3">
                            <input type="text" id="host"/>
                            <label htmlFor="host">Host</label>
                        </div>
                        <div className="input-field col 3">
                            <input type="text" id="user"/>
                            <label htmlFor="user">Usuário</label>
                        </div>
                        <div className="input-field col 3">
                            <input type="text" id="password"/>
                            <label htmlFor="password">Senha</label>
                        </div>
                        <div className="input-field col 3">
                            <input type="text" id="database"/>
                            <label htmlFor="database">Database</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
    </div>
)

export default Settings;