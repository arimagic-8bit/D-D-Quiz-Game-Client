import React, { Component } from 'react'
import {Link} from 'react-router-dom'


import {QuestionConsumer} from './../lib/QuestionProvider'


class EndScreen extends Component {
    render() {
        const {points, restartGame} = this.props
        
        const showThis = () => {
            if (points <= 50) {
                return (
                    <div>
                       <img 
                            src='https://res.cloudinary.com/dywatr6gy/image/upload/v1592212060/DnD/26488B41-010D-4A17-A093-D10C4ECC62B4_ryyifk.png'
                            alt='An npc face' 
                            className='image-type'
                        />
                        <h3 className='type'>You are an NPC!</h3> 
                        <p className='funny-text'>Hey! At least you exist.</p>
                    </div>
                )
            }
            else if (points > 50 && points <= 100) {
                return (
                    <div>
                       <img 
                            src='https://res.cloudinary.com/dywatr6gy/image/upload/v1592213918/DnD/9ece767ba78291f07e1921dca469a0de_orpo6s.jpg'
                            alt='Female and male adventurer' 
                            className='image-type'
                        />
                        <h3 className='type'>You are an adventurer!</h3> 
                        <p className='funny-text'>You started a journey full of surprises and perils. Only destiny knows what you will encounter.</p>
                    </div>
                )
            }
            else if (points > 100 && points <= 150) {
                return (
                    <div>
                       <img 
                            src='https://res.cloudinary.com/dywatr6gy/image/upload/v1592213920/DnD/2a29bf496a26823dd910500ac476019e_ytnl2b.jpg'
                            alt='Old mage' 
                            className='image-type'
                        />
                        <h3 className='type'>You are a wielder of knowledge!</h3> 
                        <p className='funny-text'>You surpassed a lot of perils and forged a name. Bards sing your adventures.</p>
                    </div>
                )
            }
            else if (points > 150) {
                return (
                    <div>
                       <img 
                            src='https://res.cloudinary.com/dywatr6gy/image/upload/v1592213921/DnD/e1962e90f6814bda054e8c0888aee6e7_slbdwf.jpg'
                            alt='Game Master' 
                            className='image-type'
                        />
                        <h3 className='type'>Are you a DM?</h3> 
                        <p className='funny-text'>I'm impress! Only people with this knowledge can be a DM. Continue sharing your stories with everyone.</p>
                    </div>
                )
            }
        }

        return (
            <div className='end-container'>
                <div className='endScreen'>
                    <p className='final-score'>Your score: {points}</p>
                    {showThis()}
                    <Link onClick={() => restartGame()} className='try-btn' to={'/'}>Try again?</Link>
                </div>
            </div>
        )
    }
}

export default QuestionConsumer(EndScreen)
