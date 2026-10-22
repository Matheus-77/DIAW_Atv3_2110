import { useState } from 'react'
const statLabels={hp:'HP',attack:'Ataque',defense:'Defesa',specialAttack:'Atq. especial',specialDefense:'Def. especial',speed:'Velocidade'}
const colors={Grass:'#6a9c57',Poison:'#a36ac1',Fire:'#ec8959',Water:'#629bce',Electric:'#d6ae36',Bug:'#93a64d',Normal:'#99948c',Flying:'#9991ca',Ground:'#ba915b',Fighting:'#bc685e',Psychic:'#d77e9e',Rock:'#a89865',Steel:'#829aab',Ice:'#6bb9c5',Ghost:'#8270aa',Dragon:'#766fc6',Dark:'#776c68'}
export function PokemonImage({pokemon}){const [failed,setFailed]=useState(false);return failed?<div className="image-fallback" role="img" aria-label={pokemon.name}><span className="pokeball"/></div>:<img loading="lazy" width="180" height="180" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} onError={()=>setFailed(true)}/>}
export function Types({types}){return <div className="types">{types.map(t=><span key={t.id} style={{'--type-color':colors[t.name]||'#85938c'}}>{t.name}</span>)}</div>}
export function Stats({stats}){return <dl className="stats">{Object.entries(statLabels).map(([key,label])=><div key={key}><dt>{label}</dt><dd><span>{stats[key]}</span><div className="stat-track"><i style={{width:`${Math.min(stats[key]/255*100,100)}%`}}/></div></dd></div>)}</dl>}

