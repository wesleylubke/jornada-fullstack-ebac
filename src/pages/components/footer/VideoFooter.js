import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter-text">
                <h3>@lub.ke</h3>
                <p>Descrição do vídeo</p>
                <div className="videoFooter-music">
                    <MusicNoteIcon className="videoFooter-icon" />
                    <div className="videoFooterMusic-text">
                        <p>nome da música</p>
                    </div>
                </div>
            </div>
            <img
                className="videoFooter_record"
                alt="Imagem de um vinil rodando"
                src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
            />
        </div>
    )
}

export default VideoFooter