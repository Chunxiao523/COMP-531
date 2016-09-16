import { expect } from 'chai'
import particle from './particle'
import { update } from './particle'

describe('Particle Functionality', () => {

    it('should have default values', () => {
        const p = particle({})
        expect(p).to.be.ok
        expect(p.missingAttribute).to.not.be.ok
        // check position, velocity, acceleration, mass
    })

    it('should update the position by the velocity', () => {
        const p = particle({ position: [1, 1], velocity: [0.5, -0.5] })
        const { position } = update(p, 2.0, {width : 800, height : 800})
        expect( position ).to.eql([2.0, 0.0])
    })

    it('should update the position by the velocity and time delta', () => {
        const p = particle({ position: [1, 1], velocity: [0.5, -0.5] })
        const { position } = update(p, 1.0, {width : 800, height : 800}) // dt is different here
        expect(position).to.eql([1.5, 0.5])
    })

    it('should update the velocity by the acceleration', () => {
        const p = particle({ velocity: [2, 2], acceleration: [0.5, -0.5] })
        const { velocity } = update(p, 2.0, {width : 800, height : 800}) // dt is different here
        expect(velocity).to.eql([3.0, 1.0])
    })

    it('particles should wrap around the world，right', () => {
        const p = particle({ position: [799, 799], velocity: [2.0, -2.0] })
        const { position } = update(p, 2.0, {width : 800, height : 800}) // dt is different here
        expect(position).to.eql([797, 795.0])
        // create a particle with position outside
        // of the canvas area.  update() should
        // bring the particle back inside
        // check all four sides
    })

    it('particles should wrap around the world, top', () => {
        const p = particle({ position: [799, 799], velocity: [-2.0, 2.0] })
        const { position } = update(p, 2.0, {width : 800, height : 800}) // dt is different here
        expect(position).to.eql([795, 797.0])
        // create a particle with position outside
        // of the canvas area.  update() should
        // bring the particle back inside
        // check all four sides
    })

    it('particles should wrap around the world, left', () => {
        const p = particle({ position: [0, 0], velocity: [-2.0, 2.0] })
        const { position } = update(p, 2.0, {width : 800, height : 800}) // dt is different here
        expect(position).to.eql([4.0, 4.0])
        // create a particle with position outside
        // of the canvas area.  update() should
        // bring the particle back inside
        // check all four sides
    })
    
    it('particles should wrap around the world, left', () => {
        const p = particle({ position: [0, 0], velocity: [2.0, -2.0] })
        const { position } = update(p, 2.0, {width : 800, height : 800}) // dt is different here
        expect(position).to.eql([4.0, 4.0])
        // create a particle with position outside
        // of the canvas area.  update() should
        // bring the particle back inside
        // check all four sides
    })
})
