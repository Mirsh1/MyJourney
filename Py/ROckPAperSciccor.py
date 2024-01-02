import random

def play_game():
    user_score = 0
    rounds = 0

    print("\nRock, Paper, Scissors Game")

    while True:
        print_menu()

        user_choice = input("Enter your choice (1-4): ") or '4'

        if user_choice == '4':
            break

        if user_choice not in ['1', '2', '3']:
            print("Invalid choice. Please choose 1, 2, 3, or 4.")
            continue

        user_choice = int(user_choice)
        computer_choice = random.randint(1, 3)

        print_choices(get_choice_name(user_choice), get_choice_name(computer_choice))

        result = determine_winner(user_choice, computer_choice)
        print(result)

        if result == "You win!":
            user_score += 1

        rounds += 1

    print_game_over(user_score, rounds)

def print_menu():
    print("\n1. Rock\n2. Paper\n3. Scissors\n4. Quit")

def print_choices(user_choice, computer_choice):
    print(f"\nYour choice: {user_choice}")
    print(f"Computer's choice: {computer_choice}")

def print_game_over(user_score, rounds):
    print("\nGame Over!")
    print(f"Your score: {user_score} out of {rounds} rounds")

def get_choice_name(choice):
    choices = {1: 'Rock', 2: 'Paper', 3: 'Scissors'}
    return choices.get(choice, 'Invalid Choice')

def determine_winner(user_choice, computer_choice):
    if user_choice == computer_choice:
        return "It's a tie!"
    elif (user_choice == 1 and computer_choice == 3) or \
         (user_choice == 2 and computer_choice == 1) or \
         (user_choice == 3 and computer_choice == 2):
        return "You win!"
    else:
        return "Computer wins!"

if __name__ == "__main__":
    play_game()
